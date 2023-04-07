package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"luna-delegator/x/delegator/types"
)

// GetNotSentDelegationCount get the total number of notSentDelegation
func (k Keeper) GetNotSentDelegationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.NotSentDelegationCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetNotSentDelegationCount set the total number of notSentDelegation
func (k Keeper) SetNotSentDelegationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.NotSentDelegationCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendNotSentDelegation appends a notSentDelegation in the store with a new id and update the count
func (k Keeper) AppendNotSentDelegation(
	ctx sdk.Context,
	notSentDelegation types.NotSentDelegation,
) uint64 {
	// Create the notSentDelegation
	count := k.GetNotSentDelegationCount(ctx)

	// Set the ID of the appended value
	notSentDelegation.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NotSentDelegationKey))
	appendedValue := k.cdc.MustMarshal(&notSentDelegation)
	store.Set(GetNotSentDelegationIDBytes(notSentDelegation.Id), appendedValue)

	// Update notSentDelegation count
	k.SetNotSentDelegationCount(ctx, count+1)

	return count
}

// SetNotSentDelegation set a specific notSentDelegation in the store
func (k Keeper) SetNotSentDelegation(ctx sdk.Context, notSentDelegation types.NotSentDelegation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NotSentDelegationKey))
	b := k.cdc.MustMarshal(&notSentDelegation)
	store.Set(GetNotSentDelegationIDBytes(notSentDelegation.Id), b)
}

// GetNotSentDelegation returns a notSentDelegation from its id
func (k Keeper) GetNotSentDelegation(ctx sdk.Context, id uint64) (val types.NotSentDelegation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NotSentDelegationKey))
	b := store.Get(GetNotSentDelegationIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNotSentDelegation removes a notSentDelegation from the store
func (k Keeper) RemoveNotSentDelegation(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NotSentDelegationKey))
	store.Delete(GetNotSentDelegationIDBytes(id))
}

// GetAllNotSentDelegation returns all notSentDelegation
func (k Keeper) GetAllNotSentDelegation(ctx sdk.Context) (list []types.NotSentDelegation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NotSentDelegationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.NotSentDelegation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetNotSentDelegationIDBytes returns the byte representation of the ID
func GetNotSentDelegationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetNotSentDelegationIDFromBytes returns ID in uint64 format from a byte array
func GetNotSentDelegationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
