import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

import TelegramComments from 'react-telegram-comments';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Начало</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Начало</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">  
                <p>
                  Начнем знакомство с теории. Любое государство стоит на 3 китах (ветвей) власти.
                  Законодательной, исполнительной и судебной. В некоторых государствах постсоветского
                  пространства существует и четвертая, неофициальная, ветка власти – контрольно
                   – надзорная.
                </p>
                <p>
                  В своем блоге я буду затрагивать конкретно судебную ветку власти. Ведь не зря
                  пунктом первым статьи первой Конституции Донецкой Народной Республики определено,
                  что Республика является демократическим правовым социальным государством.
                </p>
                <p>
                  Главой 7 Конституции закреплены основные засады судебной ветки
                  власти и прокуратуры в Республике.
                </p>
                <p>
                  Довольно часто будут проскакивать посты критики действий или
                  бездействий соответствующих должностных лиц представителей Фемиды.
                </p>
                <p>
                  Но и не будем забывать про контрольно – надзорную.
                </p>
                <p>
                  Помоги одному человеку и спасешь мир. Именно так гласит Библия.
                </p>
                <p>
                  Будут затрагиваться самые острые правовые проблемы в Республике
                  и будет даваться соответствующая правовая помощь.
                </p>
              </div>
            </PostFullContent>
            <TelegramComments
              customColor="fb9f9f"
              customHeight="450"
              commentsNumber={3}
              isDark
              pageId="about"
              showColorfulNames
              showDislikes
              showIconOutlines
              websiteKey={'wqsVGWye'}
              containerClassName="awesome-comments"
              wrapperClassName="awesome-comments__wrapper"
            />
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
