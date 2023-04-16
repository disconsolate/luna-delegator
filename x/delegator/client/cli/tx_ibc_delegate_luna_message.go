package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
	"luna-delegator/x/delegator/types"
)

var _ = strconv.Itoa(0)

func CmdIbcDelegateLunaMessage() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "ibc-delegate-luna-message [destination-chain] [destination-account] [amount]",
		Short: "delegate luna over ibc message",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDestinationChain := args[0]
			argDestinationAccount := args[1]
			argAmount, err := sdk.ParseCoinNormalized(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgIbcDelegateLunaMessage(
				clientCtx.GetFromAddress().String(),
				argDestinationChain,
				argDestinationAccount,
				argAmount,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
