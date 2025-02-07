import styles from 'app/page.module.css'
import React from 'react'

export default function RGBPickerDemo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HSL Color Picker</h1>
      <p className={styles.description}>
        Use this picker to create colors for your CSS variables (e.g., 222.2 84% 4.9%)
      </p>
      <div className={styles.usageSection}>
        <h2 className={styles.usageTitle}>Usage:</h2>
        <ol className={styles.usageList}>
          <li>Click on the gradient to set hue and saturation</li>
          <li>Use the slider to adjust lightness</li>
          <li>Click "Copy HSL for CSS" to get values</li>
          <li>Paste directly into any CSS variable in globals.css</li>
        </ol>
      </div>
    </div>
  )
}
