// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: lunadelegator/delegator/not_sent_delegation.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type NotSentDelegation struct {
	Id        uint64     `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Delegator string     `protobuf:"bytes,2,opt,name=delegator,proto3" json:"delegator,omitempty"`
	Amount    types.Coin `protobuf:"bytes,3,opt,name=amount,proto3" json:"amount"`
}

func (m *NotSentDelegation) Reset()         { *m = NotSentDelegation{} }
func (m *NotSentDelegation) String() string { return proto.CompactTextString(m) }
func (*NotSentDelegation) ProtoMessage()    {}
func (*NotSentDelegation) Descriptor() ([]byte, []int) {
	return fileDescriptor_5bef0e07f30e38c1, []int{0}
}
func (m *NotSentDelegation) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NotSentDelegation) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NotSentDelegation.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NotSentDelegation) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NotSentDelegation.Merge(m, src)
}
func (m *NotSentDelegation) XXX_Size() int {
	return m.Size()
}
func (m *NotSentDelegation) XXX_DiscardUnknown() {
	xxx_messageInfo_NotSentDelegation.DiscardUnknown(m)
}

var xxx_messageInfo_NotSentDelegation proto.InternalMessageInfo

func (m *NotSentDelegation) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *NotSentDelegation) GetDelegator() string {
	if m != nil {
		return m.Delegator
	}
	return ""
}

func (m *NotSentDelegation) GetAmount() types.Coin {
	if m != nil {
		return m.Amount
	}
	return types.Coin{}
}

func init() {
	proto.RegisterType((*NotSentDelegation)(nil), "lunadelegator.delegator.NotSentDelegation")
}

func init() {
	proto.RegisterFile("lunadelegator/delegator/not_sent_delegation.proto", fileDescriptor_5bef0e07f30e38c1)
}

var fileDescriptor_5bef0e07f30e38c1 = []byte{
	// 244 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x32, 0xcc, 0x29, 0xcd, 0x4b,
	0x4c, 0x49, 0xcd, 0x49, 0x4d, 0x4f, 0x2c, 0xc9, 0x2f, 0xd2, 0x47, 0xb0, 0xf2, 0xf2, 0x4b, 0xe2,
	0x8b, 0x53, 0xf3, 0x4a, 0xe2, 0xa1, 0x42, 0x99, 0xf9, 0x79, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9,
	0x42, 0xe2, 0x28, 0x5a, 0xf4, 0xe0, 0x2c, 0x29, 0x91, 0xf4, 0xfc, 0xf4, 0x7c, 0xb0, 0x1a, 0x7d,
	0x10, 0x0b, 0xa2, 0x5c, 0x4a, 0x2e, 0x39, 0xbf, 0x38, 0x37, 0xbf, 0x58, 0x3f, 0x29, 0xb1, 0x38,
	0x55, 0xbf, 0xcc, 0x30, 0x29, 0xb5, 0x24, 0xd1, 0x50, 0x3f, 0x39, 0x3f, 0x13, 0x6a, 0x9c, 0x52,
	0x15, 0x97, 0xa0, 0x5f, 0x7e, 0x49, 0x70, 0x6a, 0x5e, 0x89, 0x0b, 0xdc, 0x26, 0x21, 0x3e, 0x2e,
	0xa6, 0xcc, 0x14, 0x09, 0x46, 0x05, 0x46, 0x0d, 0x96, 0x20, 0xa6, 0xcc, 0x14, 0x21, 0x19, 0x2e,
	0x4e, 0xb8, 0x3d, 0x12, 0x4c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x08, 0x01, 0x21, 0x73, 0x2e, 0xb6,
	0xc4, 0xdc, 0xfc, 0xd2, 0xbc, 0x12, 0x09, 0x66, 0x05, 0x46, 0x0d, 0x6e, 0x23, 0x49, 0x3d, 0x88,
	0x9d, 0x7a, 0x20, 0x3b, 0xf5, 0xa0, 0x76, 0xea, 0x39, 0xe7, 0x67, 0xe6, 0x39, 0xb1, 0x9c, 0xb8,
	0x27, 0xcf, 0x10, 0x04, 0x55, 0xee, 0x64, 0x75, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c,
	0x0f, 0x1e, 0xc9, 0x31, 0x4e, 0x78, 0x2c, 0xc7, 0x70, 0xe1, 0xb1, 0x1c, 0xc3, 0x8d, 0xc7, 0x72,
	0x0c, 0x51, 0x0a, 0x20, 0x4f, 0xea, 0x22, 0x82, 0xa3, 0x02, 0x29, 0x68, 0x4a, 0x2a, 0x0b, 0x52,
	0x8b, 0x93, 0xd8, 0xc0, 0xce, 0x37, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0x61, 0x8e, 0x5c, 0x58,
	0x42, 0x01, 0x00, 0x00,
}

func (m *NotSentDelegation) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NotSentDelegation) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NotSentDelegation) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Amount.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintNotSentDelegation(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	if len(m.Delegator) > 0 {
		i -= len(m.Delegator)
		copy(dAtA[i:], m.Delegator)
		i = encodeVarintNotSentDelegation(dAtA, i, uint64(len(m.Delegator)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintNotSentDelegation(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintNotSentDelegation(dAtA []byte, offset int, v uint64) int {
	offset -= sovNotSentDelegation(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *NotSentDelegation) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovNotSentDelegation(uint64(m.Id))
	}
	l = len(m.Delegator)
	if l > 0 {
		n += 1 + l + sovNotSentDelegation(uint64(l))
	}
	l = m.Amount.Size()
	n += 1 + l + sovNotSentDelegation(uint64(l))
	return n
}

func sovNotSentDelegation(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozNotSentDelegation(x uint64) (n int) {
	return sovNotSentDelegation(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *NotSentDelegation) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowNotSentDelegation
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NotSentDelegation: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NotSentDelegation: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNotSentDelegation
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Delegator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNotSentDelegation
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthNotSentDelegation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthNotSentDelegation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Delegator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowNotSentDelegation
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthNotSentDelegation
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthNotSentDelegation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Amount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipNotSentDelegation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthNotSentDelegation
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipNotSentDelegation(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowNotSentDelegation
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowNotSentDelegation
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowNotSentDelegation
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthNotSentDelegation
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupNotSentDelegation
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthNotSentDelegation
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthNotSentDelegation        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowNotSentDelegation          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupNotSentDelegation = fmt.Errorf("proto: unexpected end of group")
)
