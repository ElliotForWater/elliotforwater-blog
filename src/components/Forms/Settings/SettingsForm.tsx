import React, { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useForm, FormProvider } from 'react-hook-form'
import { Input, Select } from '../Inputs/Inputs'
import ButtonPrimary from '../../Buttons/ButtonPrimary/ButtonPrimary'
import TextButton from '../../Buttons/TextButton/TextButton'
import { UserContext } from '../../../context/UserContext'
import styles from './SettingsForm.module.css'

type InputsProp = {
  language: number
  adultContentFilter: string
  openInNewTab: boolean
}

const SettingsForm = ({ callbackCloseSettings }) => {
  const { t } = useTranslation()
  const { userState, setUserState } = useContext(UserContext)
  const { language, adultContentFilter, openInNewTab } = userState

  const methods = useForm<InputsProp>({
    defaultValues: {
      language,
      adultContentFilter,
      openInNewTab,
    },
  })
  const { handleSubmit, register } = methods

  function onSubmit({ language, adultContentFilter, openInNewTab }) {
    setUserState({
      language,
      adultContentFilter,
      openInNewTab,
    })

    callbackCloseSettings()
  }

  return (
    <>
      <div className={styles.settingsHeader}>
        <h4 className='title'>{t('common:settings.title')}</h4>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.settingsBody}>
            <div className={styles.controlBox}>
              <label htmlFor='language'>{t('common:settings.language')}</label>
              <Select
                id='language'
                name='language'
                options={[
                  { label: t('common:settings.english'), value: 1 },
                  // { label: t('common:settings.italian'), value: 2 },
                ]}
                register={register}
              />
            </div>

            <div className={styles.controlBox}>
              <label htmlFor='adultContentFilter'>{t('common:settings.adult_filter')}</label>
              <Select
                id='adultContentFilter'
                name='adultContentFilter'
                options={[
                  { label: t('common:settings.off'), value: 'Off' },
                  { label: t('common:settings.moderate'), value: 'Moderate' },
                  { label: t('common:settings.strict'), value: 'Strict' },
                ]}
                register={register}
              />
            </div>

            <div className={styles.controlBox}>
              <Input
                id='openInNewTab'
                name='openInNewTab'
                className={styles.checkbox}
                type='checkbox'
                register={register}
              />
              <label className={styles.checkboxLabel} htmlFor='openInNewTab'>
                {t('common:settings.new_tab')}
              </label>
            </div>
          </div>
          <div className={styles.settingsFooter}>
            <TextButton onClick={() => callbackCloseSettings()}>{t('common:close')}</TextButton>
            <ButtonPrimary>
              <button type='submit'>{t('common:save')}</button>
            </ButtonPrimary>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default SettingsForm
