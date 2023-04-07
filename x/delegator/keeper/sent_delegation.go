package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"luna-delegator/x/delegator/types"
)

// GetSentDelegationCount get the total number of sentDelegation
func (k Keeper) GetSentDelegationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SentDelegationCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetSentDelegationCount set the total number of sentDelegation
func (k Keeper) SetSentDelegationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.SentDelegationCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendSentDelegation appends a sentDelegation in the store with a new id and update the count
func (k Keeper) AppendSentDelegation(
	ctx sdk.Context,
	sentDelegation types.SentDelegation,
) uint64 {
	// Create the sentDelegation
	count := k.GetSentDelegationCount(ctx)

	// Set the ID of the appended value
	sentDelegation.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentDelegationKey))
	appendedValue := k.cdc.MustMarshal(&sentDelegation)
	store.Set(GetSentDelegationIDBytes(sentDelegation.Id), appendedValue)

	// Update sentDelegation count
	k.SetSentDelegationCount(ctx, count+1)

	return count
}

// SetSentDelegation set a specific sentDelegation in the store
func (k Keeper) SetSentDelegation(ctx sdk.Context, sentDelegation types.SentDelegation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentDelegationKey))
	b := k.cdc.MustMarshal(&sentDelegation)
	store.Set(GetSentDelegationIDBytes(sentDelegation.Id), b)
}

// GetSentDelegation returns a sentDelegation from its id
func (k Keeper) GetSentDelegation(ctx sdk.Context, id uint64) (val types.SentDelegation, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentDelegationKey))
	b := store.Get(GetSentDelegationIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSentDelegation removes a sentDelegation from the store
func (k Keeper) RemoveSentDelegation(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentDelegationKey))
	store.Delete(GetSentDelegationIDBytes(id))
}

// GetAllSentDelegation returns all sentDelegation
func (k Keeper) GetAllSentDelegation(ctx sdk.Context) (list []types.SentDelegation) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentDelegationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SentDelegation
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSentDelegationIDBytes returns the byte representation of the ID
func GetSentDelegationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSentDelegationIDFromBytes returns ID in uint64 format from a byte array
func GetSentDelegationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
