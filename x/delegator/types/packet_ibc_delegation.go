package types

// ValidateBasic is used for validating the packet
func (p IbcDelegationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcDelegationPacketData) GetBytes() ([]byte, error) {
	var modulePacket DelegatorPacketData

	modulePacket.Packet = &DelegatorPacketData_IbcDelegationPacket{&p}

	return modulePacket.Marshal()
}
