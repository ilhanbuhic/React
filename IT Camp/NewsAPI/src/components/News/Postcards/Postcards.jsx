
import news_icon from '../../images/news-icon.webp'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard() {
  const formatDate = (publishedAt) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }
    return new Date(publishedAt).toLocaleDateString(undefined, options)
  }

  const [data, setData] = useState([])

  const iconButtonRef = useRef(null)
  const [originalColor, setOriginalColor] = useState(null)

  const handleClick = () => {
    // Get the computed style of the element
    const elementStyle = window.getComputedStyle(iconButtonRef.current)
    // Get the color property from the computed style
    let color = elementStyle.getPropertyValue('color')

    if (color === 'red') {
      // Restore the original color
      if (originalColor) {
        iconButtonRef.current.style.color = originalColor
      }
    } else {
      // Store the original color and set the color to red
      setOriginalColor(color)
      iconButtonRef.current.style.color = 'red'
    }
  }

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e7cdfdb1358a4f1d9079d743a3f945e5'
      )
      .then((response) => {
        console.log(response.data.articles)
        setData(response.data.articles.slice(0, 5))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }, [])

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='postcards-container'>
      {data?.map(
        (data) =>
          data &&
          data?.author !== 'wsj' && (
            <div className='postcard' key={data.id}>
              <Card sx={{ maxWidth: 345 }}>
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
                  alt='Paella dish'
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
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                  <CardContent></CardContent>
                </Collapse>
              </Card>
            </div>
          )
      )}
    </div>
  )
}

//   return (
//     <div className='postcards-container'>
//       {data?.map(
//         (data) => data &&
//           data?.author !== 'wsj' && (
//             <div className='postcard' key={data.id}>
//               <p>{data.author}</p>
//               <p>{formatDate(data.publishedAt)}</p>
//               <p>{data.content.replace(/\[\+\d+ chars\]/, 'Read more')}</p>
//             </div>
//           )
//       )}
//     </div>
//   )
// }

// export default Postcards
