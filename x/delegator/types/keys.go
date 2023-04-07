package types

const (
	// ModuleName defines the module name
	ModuleName = "delegator"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_delegator"

	// Version defines the current version the IBC module supports
	Version = "delegator-1"

	// PortID is the default port id that module binds to
	PortID = "delegator"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("delegator-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	SentDelegationKey      = "SentDelegation/value/"
	SentDelegationCountKey = "SentDelegation/count/"
)

const (
	NotSentDelegationKey      = "NotSentDelegation/value/"
	NotSentDelegationCountKey = "NotSentDelegation/count/"
)

const (
	DelegationKey      = "Delegation/value/"
	DelegationCountKey = "Delegation/count/"
)
