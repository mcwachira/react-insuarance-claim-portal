import React from 'react'
import {ArrowForward} from "@mui/icons-material";
import { DisclaimerContainer, DisclaimerMain, DisclaimerParagraph, DisclaimerHeading , DisclaimerButton } from './Disclaimer.styles'
const Disclaimer = () => {
    return (
        <DisclaimerContainer>
            <DisclaimerMain>

                <DisclaimerHeading>

                    Disclaimer
                </DisclaimerHeading>
                <DisclaimerParagraph>

                    The information on this website is not intended to serve as legal advice and your use of this site does not creates an attorney/client relationship with the owners of this website. All calculations are estimates and provided for informational purposes only. Data may not be complete. Actual injury values will vary. We recommend contacting an attorney if you have legal questions about the value of a car injury claim.
                </DisclaimerParagraph>


<DisclaimerButton>
Ok <ArrowForward/>
</DisclaimerButton>

            </DisclaimerMain>


        </DisclaimerContainer>
    )
}

export default Disclaimer