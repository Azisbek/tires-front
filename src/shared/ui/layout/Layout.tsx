import { PropsWithOptionalChildren } from 'shared/types/PropsWithChildren'

import styles from "./Layout.module.scss"

export function Layout({ children }: PropsWithOptionalChildren) {
  return <div className={styles.root}>{children}</div>
}
