import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '../inputs/Inputs'
import ButtonSubscribe from '../../buttons/ButtonSubscribe/ButtonSubscribe'
import ButtonFull from '../../buttons/ButtonFull/ButtonFull'
import ToastList from '../../Toast/ToastList'
import styles from './SubscribeForm.module.css'

/* eslint-disable-next-line no-shadow */
enum NOTIFICATION {
  Submit,
  Success,
  UserExists,
  ConnectionError,
  ServerError,
  None,
}

const SubscribeForm = ({ big = false, ...props }) => {
  const [list, setList] = useState([])

  const methods = useForm()
  const { handleSubmit, register, errors } = methods

  const showToast = (notification: NOTIFICATION) => {
    let toastProperties = null

    switch (notification) {
      case NOTIFICATION.Submit:
        toastProperties = {
          title: 'Submitting...',
          message: 'Please wait!',
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg',
        }
        break
      case NOTIFICATION.Success:
        toastProperties = {
          title: 'Success',
          message: 'Thanks for your interest.',
          backgroundColor: '#5cb85c',
          icon: '/images/toast/check.svg',
        }
        break
      case NOTIFICATION.UserExists:
        toastProperties = {
          title: 'Thanks',
          message: 'We already have your details',
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg',
        }
        break
      case NOTIFICATION.ServerError:
        toastProperties = {
          title: 'Sorry',
          message: 'An error occurred on our server.',
          backgroundColor: '#d9534f',
          icon: '/images/toast/error.svg',
        }
        break
      case NOTIFICATION.ConnectionError:
        toastProperties = {
          title: 'Error',
          message: 'Unable to connect.',
          backgroundColor: '#d9534f',
          icon: '/images/toast/error.svg',
        }
        break
      case NOTIFICATION.None:
      default:
        setList([])
        break
    }

    if (toastProperties) {
      setList([...list, toastProperties])
    }
  }

  async function onSubmit(data, e) {
    // Reset any notifications
    setList([])

    showToast(NOTIFICATION.Submit)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // handle success
      if (response.ok) {
        showToast(NOTIFICATION.Success)
        setTimeout(() => {
          showToast(NOTIFICATION.None)
        }, 5000)

        e.target.reset()
        return
      }

      // handle server errors
      if (response.status === 422) {
        showToast(NOTIFICATION.UserExists)
        return
      }

      showToast(NOTIFICATION.ServerError)
    } catch {
      // handle connection issuess
      showToast(NOTIFICATION.ConnectionError)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={big ? styles.newsletterFormBig : styles.newsletterForm}
        noValidate
      >
        <div className='hidden-element'>
          <Input name='name' type='text' hidden register={register} />
        </div>
        <div className={styles.wrapperInput}>
          <Input
            customClassname={big ? styles.newsletterEmailBig : styles.newsletterEmail}
            name='email'
            type='email'
            errors={errors}
            register={register}
            rules={{
              required: { value: true, message: 'Please enter your email address!' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address: example@someemail.com',
              },
            }}
          />
        </div>
        {big ? (
          <ButtonFull {...props}>
            <button type='submit'>Subscribe</button>
          </ButtonFull>
        ) : (
          <ButtonSubscribe>
            <button type='submit'>Subscribe</button>
          </ButtonSubscribe>
        )}
        <ToastList toastList={list} position='bottomRight' />
      </form>
    </FormProvider>
  )
}

export default SubscribeForm
