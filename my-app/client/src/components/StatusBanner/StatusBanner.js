import React from "react"
import { GreatKarmaBanner, AwesomeKarmaBanner, ExcellentKarmaBanner, CommunityLeaderKarmaBanner, KarmaticHeroKarmaBanner } from './StatusBanner.styled'

export default function StatusBanner({ data }) {
    return (
        // Changes color based on amount of karma coins
        <>
            {data.karma > 100 && data.karma < 500 ?
                <GreatKarmaBanner>
                    Great!
                </GreatKarmaBanner>
                : data.karma >= 500 && data.karma < 1000 ?
                    <AwesomeKarmaBanner>
                        Awesome!
                    </AwesomeKarmaBanner>
                    : data.karma >= 1000 && data.karma < 1500 ?
                        <ExcellentKarmaBanner>
                            Excellent!
                        </ExcellentKarmaBanner>
                        : data.karma >= 1500 && data.karma < 2000 ?
                            <CommunityLeaderKarmaBanner>
                                Community Leader!
                            </CommunityLeaderKarmaBanner>
                            : data.karma >= 1500 ?
                                <KarmaticHeroKarmaBanner>
                                    Karmatic Hero!
                                </KarmaticHeroKarmaBanner>
                                :
                                <h4>Help Someone Today to Change your Status!</h4>
            }
        </>
    )
}
