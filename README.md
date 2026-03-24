# WEB103 Prework - *Creatorverse*

Submitted by: **Uyen Truong**

About this web app: **Creatorverse is a React app using Supabase. Users browse creators on the main creators view, open a detail page per creator, add new creators, edit them with a full prefilled form, and delete them. Cards show name, image, description, and links to social/profile URLs.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

## Optional Features

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] **The content creator items are displayed in a creative format, like cards instead of a list**
- [x] **An image of each content creator is shown on each content creator card**

## Additional Features

* Shared **HomeLayout** with hero header and routes for browsing (`/creators`) vs adding (`/add`) under the same UI shell  
* Consistent **custom CSS** theme (dark UI, accent buttons, form styling)  
* Edit form mirrors add form, including **image URL** field, with Supabase **update**  
* **Delete** from the detail view with confirmation  

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='YOUR_GIF_OR_VIDEO_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Notes

- **Supabase client** uses `async`/`await` for `select`, `insert`, `update`, and `delete`.  
- For the assignment demo, **add at least five creators** in the app (or seed them in Supabase) before recording your walkthrough so the “five on homepage” requirement is visible.  
- Visiting `/` redirects to `/creators`; that view acts as the main “homepage” browse experience.  
- **Picocss** is not used; styling is custom in `index.css`.  

## License

Copyright **2026** **Uyen Truong**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
