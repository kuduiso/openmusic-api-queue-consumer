const { Pool } = require('pg');

class PlaylistsongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylistsongs(playlistId) {
    const query = {
      text: `SELECT song_data.*
            FROM playlistsongs
            LEFT JOIN song_data ON playlistsongs.song_id = song_data.id
            WHERE playlistsongs.playlist_id = $1`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = PlaylistsongsService;
