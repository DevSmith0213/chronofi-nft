import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import rocketImage from '../../assets/images/rocketImage.png'

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

const ItemContainer = styled.div`
    width: 100%;
    height:100%;
    margin: 0em auto 3em;
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
const RocketImg = styled.img`
    margin-top:150px;
    width: 1480px;
`
const Description = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: white;
    line-height: 1.5;
`
function TokenOmics() {
    const classes = useStyles();
    return (
        <ItemContainer>
            <TopTitle>
                TOKENOMICS
            </TopTitle>
            <RocketImg src={rocketImage} />
        </ItemContainer>
    )
}

export default TokenOmics
