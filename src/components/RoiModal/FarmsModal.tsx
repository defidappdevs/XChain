import React from 'react'
import { Modal } from '@pantherswap-libs/uikit'
import Roicalculation   from './RoiCalculation'


type RoicaluModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const FarmsModal = ({ onDismiss = defaultOnDismiss }: RoicaluModalProps) => {
  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Roicalculation />
    </Modal>
  )
}

export default FarmsModal
