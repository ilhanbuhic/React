import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse'; // Import Collapse
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import news_icon from '../../images/news-icon.webp';
import './Postcards.css';

const MyCard = () => {
  const formatDate = (publishedAt) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Date(publishedAt).toLocaleDateString(undefined, options);
  };

  const [data, setData] = useState([]);
  const [isPostcardsVisible, setIsPostcardsVisible] = useState(false);
  const iconButtonRef = useRef(null);
  const [originalColor, setOriginalColor] = useState(null);

  const [expanded, setExpanded] = React.useState(false); // Define expanded state

  const handleClick = () => {
    // Get the computed style of the element
    const elementStyle = window.getComputedStyle(iconButtonRef.current);
    // Get the color property from the computed style
    let color = elementStyle.getPropertyValue('color');

    if (color === 'red') {
      // Restore the original color
      if (originalColor) {
        iconButtonRef.current.style.color = originalColor;
      }
    } else {
      // Store the original color and set the color to red
      setOriginalColor(color);
      iconButtonRef.current.style.color = 'red';
    }
  };

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e7cdfdb1358a4f1d9079d743a3f945e5'
      )
      .then((response) => {
        console.log(response.data.articles);
        setData(response.data.articles);
        setIsPostcardsVisible(true);
      })
      .catch((error) => {
        throw new Error(error);
      });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const showThreshold = windowHeight * 0.2;

      if (scrollPosition > showThreshold) {
        setIsPostcardsVisible(true);
      } else {
        setIsPostcardsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const postcardsContainerClasses = `postcards-container ${isPostcardsVisible ? 'show' : ''}`;

  return (
    <div className={postcardsContainerClasses}>
      {data?.map((data) => (
        <div className='postcard' key={data.id}>
          <Card className='scrolling-card'>
            <CardHeader
              avatar={<Avatar src={news_icon} aria-label='recipe'></Avatar>}
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              className='cardHeader'
              title={data.author}
              subheader={formatDate(data.publishedAt)}
            />
            <CardMedia
              component='img'
              height='194'
              image={data.urlToImage}
              alt='News Image'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.content.replace(
                      /\[\+\d+ chars\]/,
                      '<span class="read-more">Read more</span>'
                    ),
                  }}
                ></p>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                ref={iconButtonRef}
                onClick={handleClick}
                className='like'
                aria-label='add to favorites'
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent></CardContent>
            </Collapse>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MyCard;
