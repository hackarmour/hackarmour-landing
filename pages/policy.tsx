import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { FadeInDown } from "../animations";
import Footer from "../components/footer";
import {
  Hero,
  Container,
  Heading,
  Break,
  Description,
  Content_Description,
  Content_Heading,
  Content_Heading_2,
  Content,
  Contents,
  DisplayDesktop,
  DisplayMobile,
} from "../styles/pageStyles";

const Policy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Policy</title>
        <meta name="description" content="Privacy policy for HackArmour" />
        <meta name="title" content="Hack Armour | Policy" />
      </Head>
      <FadeInDown>
        <Contents>
          <Content>
            <Content_Heading className="bold-fira">
              Privacy Policy for HackArmour
            </Content_Heading>
            <br />
            <Content_Description className="text-2">
              <p>
                At HackArmour, accessible from https://hackarmour.com, one of
                our main priorities is the privacy of our visitors. This Privacy
                Policy document contains types of information that is collected
                and recorded by HackArmour and how we use it.
              </p>
              <br />
              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>
              <br />
              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in HackArmour. This
                policy is not applicable to any information collected offline or
                via channels other than this website.
              </p>
              <br />

              <Content_Heading_2 className="bold-fira">
                Consent{" "}
              </Content_Heading_2>
              <br />
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
              <br />
              <Content_Heading_2 className="bold-fira">
                Information we collect{" "}
              </Content_Heading_2>
              <br />

              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information.
              </p>
              <br />
              <p>
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>
              <br />
              <p>
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name, and
                email address.
              </p>
              <br />

              <Content_Heading_2 className="bold-fira">
                How we use your information
              </Content_Heading_2>
              <br />
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <br />
              <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
              <br />
              <Content_Heading_2 className="bold-fira">
                Log Files
              </Content_Heading_2>
              <br />
              <p>
                HackArmour follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
              </p>
              <br />
              <Content_Heading_2 className="bold-fira">
                Cookies and Web Beacons
              </Content_Heading_2>
              <br />
              <p>
                Like any other website, HackArmour uses 'cookies'. These cookies
                are used to store information including visitors' preferences,
                and the pages on the website that the visitor accessed or
                visited. The information is used to optimize the users'
                experience by customizing our web page content based on
                visitors' browser type and/or other information.
              </p>
              <br />
              <Content_Heading_2 className="bold-fira">
                Advertising Partners Privacy Policies
              </Content_Heading_2>
              <br />
              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of HackArmour.
              </p>
              <br />
              <p>
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on HackArmour,
                which are sent directly to users' browser. They automatically
                receive your IP address when this occurs. These technologies are
                used to measure the effectiveness of their advertising campaigns
                and/or to personalize the advertising content that you see on
                websites that you visit.
              </p>
              <br />
              <p>
                Note that HackArmour has no access to or control over these
                cookies that are used by third-party advertisers.
              </p>
              <br />
              <Content_Heading_2 className="bold-fira">
                Third Party Privacy Policies
              </Content_Heading_2>
              <br />
              <p>
                HackArmour's Privacy Policy does not apply to other advertisers
                or websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt-out of certain options.{" "}
              </p>
              <br />
              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>
              <br />
              <Content_Heading_2 className="bold-fira">
                CCPA Privacy Rights (Do Not Sell My Personal Information)
              </Content_Heading_2>
              <br />
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>
              <br />
              <p>
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
              </p>
              <br />
              <p>
                Request that a business delete any personal data about the
                consumer that a business has collected.
              </p>
              <br />
              <p>
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
              </p>
              <br />
              <p>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <br />

              <Content_Heading_2 className="bold-fira">
                GDPR Data Protection Rights
              </Content_Heading_2>
              <br />
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>
              <br />
              <p>
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
              </p>
              <br />
              <p>
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
              </p>
              <br />
              <p>
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
              </p>
              <br />
              <p>
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
              </p>
              <br />
              <p>
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
              </p>
              <br />
              <p>
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </p>
              <br />
              <p>
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <br />

              <Content_Heading_2 className="bold-fira">
                Children's Information
              </Content_Heading_2>
              <br />
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>
              <br />

              <p>
                HackArmour does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website, we
                strongly encourage you to contact us immediately and we will do
                our best efforts to promptly remove such information from our
                records.
              </p>
            </Content_Description>
          </Content>
        </Contents>
      </FadeInDown>
      <Footer />
    </div>
  );
};

const MainImageGrid = styled.div`
  width: 30%;
  @media all and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    & img {
      width: 310px;
    }
  }
`;

const MainContentGrid = styled.div`
  margin: auto;
  width: 50%;
  @media all and (max-width: 800px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default Policy;
