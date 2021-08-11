import React from 'react'
import { Modal } from '@pantherswap-libs/uikit'
import SlippageToleranceSetting from '../PageHeader/SlippageToleranceSetting'


type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const FarmsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  return (
    <Modal title="" onDismiss={onDismiss}>
      <SlippageToleranceSetting />
    </Modal>
  )
}

export default FarmsModal
