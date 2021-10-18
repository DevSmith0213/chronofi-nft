import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import bannerImage from '../../assets/images/bannerImage.png'
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

import telegramIcon from '../../assets/images/telegram.png'
import twitterIcon from '../../assets/images/twitter.png'
import onlineIcon from '../../assets/images/online.png'
import buttonplay from '../../assets/images/buttonplay.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection: 'column-reverse',
        // },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const Container = styled.div`
    width: 100%;
    height:100vh;
    background-image: url(/bannerImage.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items:center;
    flex-direction:column;
`
const BottomContainer = styled.div`
    position:absolute;
    bottom:80px;
    display:flex;
    align-items:center;
    flex-direction:column;
`
const ContainerTitle = styled.p`
    display:flex;
    color:white;
    text-align:center;
    // margin:30rem auto 0 auto;
    font-size: 32px;
    font-weight: 100 !important;
`
const OutlineButton = styled.button`
    width: 263px;
    height: 75px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:46px;
    background: #D35BFF;
    transition: all 0.2s ease-out;
    @media (max-width: 720px) {
        width: 100px;
        height: 35px;
        font-size:20px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        // background: rgb(${colors.fontColor});
    }
`
const PlayIcon = styled.img`
    width: 80px;
    height: 80px;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const SocialTag = styled.a`
    margin-right:3%;
    @media (max-width: 560px) {
        width: 100%;
        margin-top:-2%;
    }
`
const SocialIcon = styled.img`
    width: 180px;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
    @media (max-width: 560px) {
        margin-top:30px;
        width: 110px;
    }
`
const IconList = styled.div`
    margin: 0 auto 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
`

function BannerContent() {
    const classes = useStyles();
    return (
        <Container>
            <BottomContainer>
                <ContainerTitle>
                    Monster come to invade earth, Robots save the earth.
                </ContainerTitle>
                <PlayIcon src={buttonplay} ></PlayIcon>
                <IconList>
                    <SocialTag target="_blank" href=""><SocialIcon src={telegramIcon} ></SocialIcon></SocialTag>
                    <SocialTag target="_blank" href=""><SocialIcon src={onlineIcon} ></SocialIcon></SocialTag>
                    <SocialTag target="_blank" href=""><SocialIcon src={twitterIcon} ></SocialIcon></SocialTag>
                </IconList>
            </BottomContainer>
        </Container >
    )
}

export default BannerContent
