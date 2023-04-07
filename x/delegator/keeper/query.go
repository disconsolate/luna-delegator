package keeper

import (
	"luna-delegator/x/delegator/types"
)

var _ types.QueryServer = Keeper{}
