import React from 'react'

import { Container, Heading, TextContainer, MainText, SubText, Paragraph, GetStartedButton } from './InitialPage.styles'
import { useNavigate } from 'react-router-dom'

const InitialPage = () => {

    const navigate = useNavigate()
    const handleClick = () => (
        navigate('/disclaimer')
    )
    return (
        <Container>

            <TextContainer>

                <Heading>

                    Injury Values

                </Heading>


                <MainText>
                    How much is your car accident case worth?

                </MainText>


                <SubText>

                    Valuing a Car Accident Injury Claim
                </SubText>

                <Paragraph>
                    Insurance companies investigate thousands of car accident insurance claims each year so they know how much a case is worth because they know how much people are willing to accept in settlements and they know how much juries are willing to award. A lot of factors determine how much a car crash injury is worth. Some of these valuation factors include the following: fault, speed of impact, involvement of drugs or alcohol, your age, your sex, the nature and extent of injuries, treatment types, amount of medical bills, and your lost wages. This website is designed to give you a sense about how these factors might impact a hypothetical injury claim. This website is for illustration purposes only and does not provide legal advice and the values for hypothetical injury claims should not be relied on to resolve a car injury insurance claim.
                </Paragraph>

                <GetStartedButton onClick={handleClick}>Let's Get Started </GetStartedButton>

            </TextContainer>



        </Container>
    )
}

export default InitialPage