import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

import featureImage from '../../assets/images/featureImage.png'
import telegramIcon from '../../assets/images/telegram.png'
import onlineIcon from '../../assets/images/online.png'
import twitterIcon from '../../assets/images/twitter.png'
import footerRight from '../../assets/images/footerRight.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column-reverse',
        },
    },
    root1: {
        display: 'flex',
        marginTop: -150,
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
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

const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height:67px;
    padding: 0 20px;
    border-radius: 5px;
    margin-top: 80px;
    @media (max-width: 880px) {
        flex-direction: column;
        background: rgb(${colors.main});
        opacity: 0.9;
        width: 100%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
        height:200px;
        margin-top: 0px;
    }
`
const MmenuItem = styled.li`
    color: rgb(${colors.fontColor});
    font-size: 22px;
    font-weight: bold;
    margin: 0 1em;
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`

const ItemContainer = styled.div`
    width: 100%;
    height:100%;
    margin: 0em auto;
    background-image: url(/background1.png);
    display:flex;
    align-items:center;
    flex-direction:column;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 800px) {
        padding: 4em auto;
    }
`
const TopTitle = styled.h1`
    margin:0;
    color:white;
    font-size:50px;
    padding-top:3%;
`
const FeatureImg = styled.img`
    margin-top:100px;
    width: 100%;
`
const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    line-height: 1.5;
`
const IconList = styled.div`
    width:50%;
    margin: 0 auto 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
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
    height: 45px;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const FooterTxt = styled.p`
    color:white;
    font-size:24px;
    font-weight:300;
`
const FooterImageArea = styled.div`
    width:100%;
    display:flex;
    justify-content:end;
    margin-top:-120px;
    padding-bottom:50px;
`
const FooterImage = styled.img`
    margin-right:50px;
    width:90px;
`

function OurTeam() {
    const classes = useStyles();
    return (
        <ItemContainer>
            <TopTitle>
                FOUNDING TEAM
            </TopTitle>
            <FeatureImg src={featureImage} />
            <MenuContainer>
                <MmenuItem><a href="#dashboard">HOME</a></MmenuItem>
                <MmenuItem><a href="#loadMap">ABOUT</a></MmenuItem>
                <MmenuItem><a href="#FAQ">TOKENOMICS</a></MmenuItem>
                <MmenuItem><a href="#footer">ROADMAP</a></MmenuItem>
                <MmenuItem><a href="#footer">FEATURES</a></MmenuItem>
                <MmenuItem><a href="#footer">TEAM</a></MmenuItem>
                <MmenuItem><a href="#footer">WHITEPAPER</a></MmenuItem>
            </MenuContainer>
            <IconList>
                <SocialTag target="_blank" href=""><SocialIcon src={telegramIcon} ></SocialIcon></SocialTag>
                <SocialTag target="_blank" href=""><SocialIcon src={onlineIcon} ></SocialIcon></SocialTag>
                <SocialTag target="_blank" href=""><SocialIcon src={twitterIcon} ></SocialIcon></SocialTag>
            </IconList>
            <FooterTxt>
                COPYRIGHT 2021 CHRONOFI
            </FooterTxt>
            <FooterImageArea>
                <FooterImage src={footerRight}></FooterImage>
            </FooterImageArea>
        </ItemContainer>
    )
}

export default OurTeam
