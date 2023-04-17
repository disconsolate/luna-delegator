package types

// ValidateBasic is used for validating the packet
func (p IBCBalanceQueryPacketPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IBCBalanceQueryPacketPacketData) GetBytes() ([]byte, error) {
	var modulePacket DelegatorPacketData

	modulePacket.Packet = &DelegatorPacketData_IBCBalanceQueryPacketPacket{&p}

	return modulePacket.Marshal()
}
