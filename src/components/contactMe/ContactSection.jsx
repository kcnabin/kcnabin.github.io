import React from 'react'
import IconText from './IconText'
import EmailIcon from '../../svgIcons/EmailIcon'
import PhoneIcon from '../../svgIcons/PhoneIcon'
import LocationIcon from '../../svgIcons/LocationIcon'
import LineHeader from '../LineHeader'

const ContactSection = () => {
  const contact = {
    email: 'kcnabinkc@gmail.com',
    phone: '+977-9861813448',
    address: 'Sitapaila, Kathmandu'
  }

  return (
    <div className='text-center mt-5'>

      <div className='mt-3'>
        <LineHeader header="Contact Me" />
      </div>

      <div className=' fw-bold d-flex justify-content-center'>
        <div>
          <div className='d-flex gap-3 gap-md-5 flex-wrap justify-content-center'>
            <IconText
              text={contact.email}
              href={`mailto:${contact.email}`}
            >
              <EmailIcon />
            </IconText>

            <IconText
              text={contact.phone}
              href={`tel:${contact.phone}`}
            >
              <PhoneIcon />
            </IconText>

          </div>

          <div className='d-flex justify-content-center my-3'>
            <IconText
              text={contact.address}
              href={`https://www.google.com/maps/search/?api=1&query=${contact.address}`}
            >
              <LocationIcon />
            </IconText>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection