import { motion } from 'framer-motion'
import { MutableRefObject } from 'react'
import useExternalClick from 'src/hooks/useExternalClick'

export default function Dialog(props) {
  const { visible, classname, onClose, dialogRef, children } = props

  useExternalClick(dialogRef, () => {
    onClose?.()
  })

  return (
    <>
      {visible && (
        <motion.div
          className={classname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </>
  )
}
