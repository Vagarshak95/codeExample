import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import BodyText from 'components/BodyText'
import Container from 'components/Container'
import GradientButton from 'components/GradientButton'
import { PageSubtitle, PageTitle } from 'components/LegacyLayout'
import Progress from 'components/Progress'
import Title from 'components/Title/Title'
import Layout from 'containers/Layout'
import fetchPageMetadata from 'utils/fetchPageMetadata'

import iconNumber1 from 'assets/images/icon-number-01.svg'
import iconNumber2 from 'assets/images/icon-number-02.svg'
import iconNumber3 from 'assets/images/icon-number-03.svg'
import iconNumber4 from 'assets/images/icon-number-04.svg'
import iconNumber5 from 'assets/images/icon-number-05.svg'
import iconNumber6 from 'assets/images/icon-number-06.svg'

import poseImage1 from 'assets/images/pose-01.png'
import poseImage2 from 'assets/images/pose-02.png'
import poseImage3 from 'assets/images/pose-03.png'
import poseImage4 from 'assets/images/pose-04.png'
import poseImage5 from 'assets/images/pose-05.png'
import poseImage6 from 'assets/images/pose-06.png'
import poseImage7 from 'assets/images/pose-07.png'

import './how-it-works.scss'

const HowItWorksPage = ({ title, description }) => (
    <div className="HowItWorksPage">
        <Head>
            <title>{title || 'Ithire'}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content="#C35571" />
        </Head>
        <Progress />
        <Layout>
            <Container>
                <PageTitle>
                    Ithire: we help your dream projects come true
                </PageTitle>
                <PageSubtitle>
                    Want to build a website for your business, complex application, design logo, or anything
                    else? Join us, and we’ll ensure the successful realization of all your projects.
                </PageSubtitle>
            </Container>
            <section className="HowItWorksPage-Section">
                <Container>
                    <Title as="h2" size="xl" className="HowItWorksPage-SectionTitle">
                        How It Works
                    </Title>
                    <div className="HowItWorksPage-Content">
                        <article className="HowItWorksPage-Item HowItWorksPage-Item_blue flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-Column">
                                <img className="HowItWorksPage-Image" src={iconNumber1} alt="" />
                                <div className="HowItWorksPage-Block">
                                    <h3 className="HowItWorksPage-BlockTitle">
                                        Post your job
                                    </h3>
                                    <BodyText size="xl" className="HowItWorksPage-BlockDescription">
                                        It’s free! First, post your job post with all the specific requirements: budget,
                                        timeline, required skills, and all other details.
                                    </BodyText>
                                </div>
                            </div>
                            <div className="HowItWorksPage-Column HowItWorksPage-Column_image">
                                <img src={poseImage1} alt="" />
                            </div>
                        </article>
                        <article className="HowItWorksPage-Item HowItWorksPage-Item_blue flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-Column HowItWorksPage-Column_image">
                                <img src={poseImage2} alt="" />
                            </div>
                            <div className="HowItWorksPage-Column">
                                <img className="HowItWorksPage-Image" src={iconNumber2} alt="" />
                                <div className="HowItWorksPage-Block">
                                    <h3 className="HowItWorksPage-BlockTitle">
                                        Get freelancers’ applications
                                    </h3>
                                    <BodyText size="xl" className="HowItWorksPage-BlockDescription">
                                        Just wait until you get a massive wave of freelancers’ applications for your job
                                        post. All you need to do is to skim through their profiles to understand who is
                                        the best match.
                                    </BodyText>
                                </div>
                            </div>
                        </article>
                        <article className="HowItWorksPage-Item HowItWorksPage-Item_blue flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-Column">
                                <img className="HowItWorksPage-Image" src={iconNumber3} alt="" />
                                <div className="HowItWorksPage-Block">
                                    <h3 className="HowItWorksPage-BlockTitle">
                                        Review the applications, compare and select
                                    </h3>
                                    <BodyText size="xl" className="HowItWorksPage-BlockDescription">
                                        Conduct interviews, look at the freelancers’ portfolios, and find the
                                        freelancers you were looking for!
                                    </BodyText>
                                </div>
                            </div>
                            <div className="HowItWorksPage-Column HowItWorksPage-Column_image">
                                <img src={poseImage3} alt="" />
                            </div>
                        </article>
                        <article className="HowItWorksPage-Item HowItWorksPage-Item_blue flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-Column HowItWorksPage-Column_image">
                                <img src={poseImage4} alt="" />
                            </div>
                            <div className="HowItWorksPage-Column">
                                <img className="HowItWorksPage-Image" src={iconNumber4} alt="" />
                                <div className="HowItWorksPage-Block">
                                    <h3 className="HowItWorksPage-BlockTitle">
                                        Enjoy quality work with our tracking tools.
                                    </h3>
                                    <BodyText size="xl" className="HowItWorksPage-BlockDescription">
                                        Improve the efficiency of your work by tracking your freelancer’s progress with
                                        Ithire’s internal tracking tools. Know precisely at which stage the project is
                                        and review your freelancers’ screenshots.
                                    </BodyText>
                                </div>
                            </div>
                        </article>
                        <article className="HowItWorksPage-Item HowItWorksPage-Item_blue flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-Column">
                                <img className="HowItWorksPage-Image" src={iconNumber5} alt="" />
                                <div className="HowItWorksPage-Block">
                                    <h3 className="HowItWorksPage-BlockTitle">
                                        Pay safely for the quality work
                                    </h3>
                                    <BodyText size="xl" className="HowItWorksPage-BlockDescription">
                                        Pay safely with our automatic and flexible escrow system. You can sleep tight at
                                        night, knowing your money is in secure hands.
                                    </BodyText>
                                </div>
                            </div>
                            <div className="HowItWorksPage-Column HowItWorksPage-Column_image">
                                <img src={poseImage5} alt="" />
                            </div>
                        </article>
                        <article className="HowItWorksPage-Item HowItWorksPage-Item_blue flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-Column HowItWorksPage-Column_image">
                                <img src={poseImage6} alt="" />
                            </div>
                            <div className="HowItWorksPage-Column">
                                <img className="HowItWorksPage-Image" src={iconNumber6} alt="" />
                                <div className="HowItWorksPage-Block">
                                    <h3 className="HowItWorksPage-BlockTitle">
                                        Leave your freelancer a review!
                                    </h3>
                                    <BodyText size="xl" className="HowItWorksPage-BlockDescription">
                                        After successful completion of the project, don’t forget to leave your
                                        freelancer a review. In the end, if you have another project in your mind,
                                        repeat the cycle once more!
                                    </BodyText>
                                </div>
                            </div>
                        </article>
                    </div>
                </Container>
                <div className="HowItWorksPage-Footer">
                    <Container>
                        <div className="HowItWorksPage-FooterRow flex-column-reverse flex-md-row">
                            <div className="HowItWorksPage-FooterColumn HowItWorksPage-FooterColumn_left">
                                <Title size="xl" className="HowItWorksPage-FooterTitle">
                                    Find the Best Freelancer
                                </Title>
                                <p className="HowItWorksPage-FooterDescription">
                                    Hire, Track And Safely Pay To The Best Freelancers With Our All-In-One Platform
                                </p>
                                <GradientButton as="a" size="md" href="/post-job">
                                    Hire Now For Free
                                </GradientButton>
                            </div>
                            <div className="HowItWorksPage-FooterColumn HowItWorksPage-FooterColumn_right">
                                <img src={poseImage7} alt="" />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </Layout>
    </div>
)

HowItWorksPage.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
}

HowItWorksPage.getInitialProps = ({ store, asPath }) => {
    fetchPageMetadata(store, asPath)
}

const mapStateToProps = ({ pageMeta: { title, description } }) => ({
    title,
    description,
})

export default connect(mapStateToProps)(HowItWorksPage)