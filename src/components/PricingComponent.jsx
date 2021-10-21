import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledPricingCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  @media (max-width: 942px) {
    flex-direction: column;
  }
`

const StyledPricingCardContainer = styled.div`
  width: 320px;
  margin: 48px 48px 0 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 5px 2px #ECEDEE;
  overflow: hidden;
`

const StyledHeaderContainer = styled.div`
  background-color: ${({ type }) => type === 'free' ? '#D0EBFF' : '#63E6BE'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #343A40;
`

const StyledHeaderIcon = styled(FontAwesomeIcon)`
  font-size: 55px;
  margin-bottom: 10px;
`

const StyledHeaderText = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`

const StyledHeaderPrice = styled.div`
  font-weight: 600;
  font-size: 50px;
`

const StyledHeaderUnit = styled.div`
  font-size: 20px;
`

const StyledSpecialInfoContainer = styled.div`
  width: 100%;
  background-color: ${({ type }) => type === 'free' ? '#E7F5FF' : '#183153'};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px;
  box-sizing: border-box;
  color: ${({ type }) => type === 'free' ? '#ADB5BD' : 'white'};
`

const StyledSpecialInfoIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
  font-size: 20px;
  width: 20px !important;
  ${({ type }) => type !== 'free' && `
    color: #FFD43B;
  `};
  ${({ $isClickable }) => $isClickable && `
    :hover {
      cursor: pointer;
    }
  `}
  ${({ $comingSoon }) => $comingSoon && `
    color: #ADB5BD;
  `};
`

const StyledSpeicalInfoText = styled.a`
  padding: 0 10px;
  color: white;
  flex-grow: 2;
  white-space: nowrap;
  font-size: 14px;
  ${({ $isExcluded }) => $isExcluded === true && `
    text-decoration: line-through;
    color: #ADB5BD;
  `};
  ${({ href }) => href && `
    text-decoration: none;
  `};
  ${({ $comingSoon }) => $comingSoon && `
    color: #ADB5BD;
  `};
`

const StyledSpecialInfoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
`

const StyledSpecialInfoListItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 15px;
  :first-child {
    padding: 0;
  }
`

const StyledBetaPill = styled.div`
  color: #183153;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: #FFD43B;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`

const StyledFeaturesContainer = styled.div`
  padding: 30px 25px;
`

const StyledFeaturesList = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
`

const StyledFeaturesListItem = styled.li`
  padding-bottom: 15px;
  :last-child {
    padding: 0;
  }
`

const StyledFeaturesListItemIcon = styled(FontAwesomeIcon)`
  padding-right: 20px;
  font-size: 18px;
  width: 20px !important;
  color: ${({ type, $isExcluded }) => $isExcluded ? '#ADB5BD' : (type === 'free' ? '#3E9AE9' : '#12B886')};
`

const StyledFeaturesListItemText = styled.a`
  font-size: 15px;
  color: ${({ $isExcluded }) => $isExcluded ? '#ADB5BD' : '#495057'};
  text-decoration-color: rgba(0,0,0,0.25);
  :hover {
    color: ${({ type }) => type === 'free' ? '#228BE6' : '#12b886'};
    text-decoration-color: ${({ type }) => type === 'free' ? '#228BE6' : '#12b886'};
  }
`

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  border-top: 2px solid #F1F3F5;
  ${({ type }) => type !== 'free' && `
    background-color: #C3FAE8;
    border-top-color: #96F2D7;
  `}
`

const StyledFooterButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) => type !== 'free' && '#12B886'};
  text-align: center;
  padding: 13px 35px;
  border-radius: 8px;
  border: 1px solid ${({ type }) => type === 'free' ? '#CDCDCD' : '#0E936B'};
  border-bottom: 4px solid ${({ type }) => type === 'free' ? '#CDCDCD' : '#0E936B'};
  width: 65%;
  font-size: 14px;
  font-weight: bold;
  color: ${({ type }) => type === 'free' ? '#228BE6' : 'white'};
  text-decoration: none;
  :hover {
    color: ${({ type }) => type === 'free' && 'white'};
    background-color: ${({ type }) => type === 'free' ? '#1971C2' : '#099268'};
    border-color: ${({ type }) => type === 'free' ? '#145A9B' : '#077553'};
    cursor: pointer;
  }
`

const StyledFooterIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  padding-right: 10px;
`

const planToHeaderText = (plan) => {
  const lower = plan.toLowerCase()

  return `${lower.slice(0, 1).toUpperCase()}${lower.slice(1)}`
}

const planToIcon = {
  free: 'running',
  standard: 'car-side'
}

const BetaPill = () => {
  return (
    <StyledBetaPill>
      BETA
    </StyledBetaPill>
  )
}

const Header = (props) => {
  const {
    type,
    icon,
    text,
    amount,
    units
  } = props

  return (
    <StyledHeaderContainer type={type}>
      <StyledHeaderIcon icon={icon} />
      <StyledHeaderText>{text}</StyledHeaderText>
      <StyledHeaderPrice>${amount}</StyledHeaderPrice>
      <StyledHeaderUnit>{units}</StyledHeaderUnit>
    </StyledHeaderContainer>
  )

}

const SpecialInfo = (props) => {
  const {
    type,
    text,
    isExcluded,
    url,
    additionalFeatures
  } = props

  const [expanded, setExpanded] = useState(false)

  const hasAdditionalFeatures = additionalFeatures !== null

  const handleExpand = () => {
    if (hasAdditionalFeatures) {
      setExpanded((prev) => !prev)
    }
  }

  return (
    <StyledSpecialInfoContainer type={type}>
      <StyledSpecialInfoList>
        <StyledSpecialInfoListItem>
          <StyledSpecialInfoIcon type={type} icon={type === 'free' ? 'times' : (expanded ? 'caret-down' : 'caret-right')} $isClickable={hasAdditionalFeatures} onClick={handleExpand} />
          <StyledSpeicalInfoText type={type} $isExcluded={isExcluded} href={url}>
            {text}
          </StyledSpeicalInfoText>
        </StyledSpecialInfoListItem>
        {expanded && additionalFeatures.map(({ text, comingSoon = false }, idx) => {
          return (
            <StyledSpecialInfoListItem key={idx}>
              <StyledSpecialInfoIcon type={type} icon={comingSoon ? ['far', 'clock'] : 'check'} $comingSoon={comingSoon} />
              <StyledSpeicalInfoText type={type} $isExcluded={isExcluded} $comingSoon={comingSoon}>
                {text}
              </StyledSpeicalInfoText>
            </StyledSpecialInfoListItem>
          )
        })}
      </StyledSpecialInfoList>
      {type !== 'free' && <BetaPill />}
    </StyledSpecialInfoContainer>
  )
}

const Features = (props) => {
  const {
    type,
    includes,
    excludes
  } = props

  return (
    <StyledFeaturesContainer>
      <StyledFeaturesList>
        {includes.map(({ text, url }, idx) => {
          return (
            <StyledFeaturesListItem key={`includes-${idx}`}>
              <StyledFeaturesListItemIcon type={type} icon='check' />
              <StyledFeaturesListItemText type={type} href={url}>
                {text}
              </StyledFeaturesListItemText>
            </StyledFeaturesListItem>
          )
        })}
        {excludes.map(({ text, url }, idx) => {
          return (
            <StyledFeaturesListItem key={`excludes-${idx}`}>
              <StyledFeaturesListItemIcon type={type} icon='times' $isExcluded />
              <StyledFeaturesListItemText type={type} href={url} $isExcluded>
                {text}
              </StyledFeaturesListItemText>
            </StyledFeaturesListItem>
          )
        })}
      </StyledFeaturesList>
    </StyledFeaturesContainer>
  )
}

const Footer = (props) => {
  const {
    type,
    text,
    url
  } = props

  return (
    <StyledFooterContainer type={type}>
      <StyledFooterButton type={type} href={url}>
        <StyledFooterIcon icon={type === 'free' ? 'rocket' : 'gamepad'} />
        {text}
      </StyledFooterButton>
    </StyledFooterContainer>
  )
}

const PricingCard = (props) => {
  const {
    plan,
    price,
    unit,
    special: {
      text: specialText,
      excluded: excludeSpecial,
      url: specialUrl = null,
      additionalFeatures: additionalSpecialFeatures = null
    },
    includes,
    excludes,
    callToAction: {
      text: callToActionText,
      url: callToActionUrl
    }
  } = props

  return (
    <StyledPricingCardContainer>
      <Header type={plan} icon={planToIcon[plan]} text={planToHeaderText(plan)} amount={price} units={unit} />
      <SpecialInfo type={plan} text={specialText} isExcluded={excludeSpecial} url={specialUrl} additionalFeatures={additionalSpecialFeatures} />
      <Features type={plan} includes={includes} excludes={excludes} />
      <Footer type={plan} text={callToActionText} url={callToActionUrl} />
    </StyledPricingCardContainer>
  )
}

const PricingComponent = ({ data }) => {
  return (
    <StyledPricingCards>
      {data.map((d, idx) => <PricingCard key={idx} {...d} />)}
    </StyledPricingCards>
  )
}

export {
  PricingComponent
}