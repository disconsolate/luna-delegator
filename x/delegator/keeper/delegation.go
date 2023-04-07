package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"luna-delegator/x/delegator/types"
)

// GetDelegationCount get the total number of delegation
func (k Keeper) GetDelegationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetDelegationCount set the total number of delegation
func (k Keeper) SetDelegationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.DelegationCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendDelegation appends a delegation in the store with a new id and update the count
func (k Keeper) AppendDelegation(
	ctx sdk.Context,
	delegation types.Delegation,
) uint64 {
	// Create the delegation
	count := k.GetDelegationCount(ctx)

	// Set the ID of the appended value
	delegation.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationKey))
	appendedValue := k.cdc.MustMarshal(&delegation)
	store.Set(GetDelegationIDBytes(delegation.Id), appendedValue)

	// Update delegation count
	k.SetDelegationCount(ctx, count+1)

	return count
}

// SetDelegation set a specific delegation in the store
func (k Keeper) SetDelegation(ctx sdk.Context, delegation types.Delegation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationKey))
	b := k.cdc.MustMarshal(&delegation)
	store.Set(GetDelegationIDBytes(delegation.Id), b)
}

// GetDelegation returns a delegation from its id
func (k Keeper) GetDelegation(ctx sdk.Context, id uint64) (val types.Delegation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationKey))
	b := store.Get(GetDelegationIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDelegation removes a delegation from the store
func (k Keeper) RemoveDelegation(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationKey))
	store.Delete(GetDelegationIDBytes(id))
}

// GetAllDelegation returns all delegation
func (k Keeper) GetAllDelegation(ctx sdk.Context) (list []types.Delegation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DelegationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Delegation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDelegationIDBytes returns the byte representation of the ID
func GetDelegationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDelegationIDFromBytes returns ID in uint64 format from a byte array
func GetDelegationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
