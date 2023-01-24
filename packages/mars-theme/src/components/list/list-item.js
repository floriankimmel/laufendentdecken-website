import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <PodcastEpisode>
            
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        <PublishDate>
          {" "}
          Veröffentlich am <b>{date.toDateString()}</b>
        </PublishDate>
      </div>
    </PodcastEpisode>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const PodcastEpisode = styled.div`
    flex: 1 0 21%; /* explanation below */
    margin: 5px;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
