import { NextApiRequest, NextApiResponse } from 'next';
import mql from '@microlink/mql';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { url } = req.query;
    const { status, data } = await mql(url as string, {
      screenshot: true,
      // @ts-ignore
      overlay: {
        background:
          'linear-gradient(225deg, #F472B6 0%, #7A96FC 50%, #26F0C0 100%)',
        browser: 'dark'
      }
    });
    res.status(200).json({
      image: data?.screenshot?.url
    });
  } catch (error) {
    res.status(500).json({
      error: JSON.stringify(error)
    });
  }
}

export default handler;