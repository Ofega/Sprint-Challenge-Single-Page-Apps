import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    background: #fff;
    font-weight: 400;
    border: 1px solid rgba(34,36,38,.15);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    border-radius: 4px;
    min-height: 40px;
    font-size: 1rem;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    .menu-container {
        height: 100%;
        min-height: 40px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        display: flex;

        a {
            position: relative;
            vertical-align: middle;
            line-height: 1;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
            flex: 0 0 auto;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            background: 0 0;
            padding: 1rem;
            text-transform: none;
            color: rgba(0,0,0,.87);
            font-weight: 400;
            transition: background .1s ease,box-shadow .1s ease,color .1s ease;
    
            &.selected {
                background: rgba(0,0,0,.05);
                color: rgba(0,0,0,.95);
                font-weight: 400;
                box-shadow: none;
    
                &:after {
                    visibility: visible;
                    background-color: #f2f2f2;
                }
            }
    
            &:before {
                position: absolute;
                content: '';
                top: 0;
                right: 0;
                height: 100%;
                width: 1px;
                background: rgba(34,36,38,.1);
            }
    
            &:after {
                visibility: hidden;
                position: absolute;
                content: '';
                top: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%) rotate(45deg);
                background: 0 0;
                margin: .5px 0 0;
                width: .57142857em;
                height: .57142857em;
                border: none;
                border-bottom: 1px solid #d4d4d5;
                border-right: 1px solid #d4d4d5;
                z-index: 2;
                transition: background .1s ease;
            }
        }
    }
`

export const Card = styled.div`
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 290px;
    min-height: 0;
    background: #fff;
    padding: 0;
    border: none;
    border-radius: 4px;
    margin: 1.25rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    transition: box-shadow .1s ease,transform .1s ease;

    .image-container {
        position: relative;
        display: block;
        flex: 0 0 auto;
        padding: 0;
        background: rgba(0,0,0,.05);

        img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: inherit;
        }
    }

    .content-container {
        flex-grow: 1;
        border: none;
        border-top: 1px solid rgba(34,36,38,.1);
        background: 0 0;
        margin: 0;
        padding: 1em 1em;
        box-shadow: none;
        font-size: 1em;
        border-radius: 0;

        &.extra {
            max-width: 100%;
            min-height: 0!important;
            flex-grow: 0;
            border-top: 1px solid rgba(0,0,0,.05);
            width: auto;
            padding: .75em 1em;
        
            a {
                font-size: .9rem;
                color: rgba(0,0,0,.4);
                transition: color .1s ease;
                text-decoration: none;
            }
        }

        h2 {
            display: block;
            color: rgba(0,0,0,.85);
            margin: 0;
            font-size: 1.3rem;
        }

        .meta-data {
            font-size: .9rem;
            color: rgba(0,0,0,.4);
            margin: .25rem 0 0 0;
        }

        .description {
            color: rgba(0,0,0,.68);
            margin-top: 1em;
            font-size: .9rem;

            p {
                margin: 0;
                font-size: .9rem;

                &:last-of-type {
                    margin-top: .5rem;
                }
            }
        }
    }
`