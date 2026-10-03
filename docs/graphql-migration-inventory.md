# GraphQL → Commerce migration inventory

Every GraphQL operation the storefront calls today (all in `apps/storefront/app/lib/*` or admin components), and where it goes after the migration.
Check an item off when its Apollo call is deleted (Phase 5).

**Targets:**

- `commerce.*`: function in `packages/commerce` (Phase 4), called from server components/actions
- **Supabase Auth**: replaced by managed auth (Phase 3)
- **Delete**: dead or duplicated

## Catalog (read)

- [ ] `Products`, `Product`: `commerce.products.list`, `commerce.products.get`
- [ ] `FeaturedProducts`: `commerce.products.list({ featured: true })`
- [ ] `FilterProducts`, `FilterProductsCount`: `commerce.products.list(filters)`, which returns `{ items, total }`
- [ ] `CountProducts`, `ProductCount`, `ProductsCount`: Delete. Three duplicates, folded into `list().total`
- [ ] `Categories`, `Category`: `commerce.categories.list`, `commerce.categories.get`
- [ ] `Collections`: `commerce.collections.list`
- [ ] `Tags`: `commerce.tags.list`

## Site content (read/write, admin)

- [ ] `Landing`, `GetLanding`, `GetHero`, `GetAbout`, `GetParallelSlide`: `commerce.content.get(section)`
- [ ] `UpdateLandingPage`, `UpdateHero`, `UpdateAbout`, `updateParallelSlide`: `commerce.content.update(section, data)` (admin)

## Catalog admin (write)

- [ ] `AddProduct`: `commerce.products.create` (admin; images go to Supabase Storage)
- [ ] `UpdateProduct`: `commerce.products.update`; delete becomes `commerce.products.archive` (`DeleteProduct.js` currently reuses `UpdateProduct`)
- [ ] `UpdateCategory`, `UpdateCollection`, `UpdateTag`, `UpdateOffer`: `commerce.{categories,collections,tags,offers}.upsert` (admin)
- [ ] `SignS` (in `lib/product.js`): Delete. Upload-signing helper for S3, replaced by Supabase Storage signed uploads

## Users / auth

- [ ] `SignUp`, `SignIn`: **Supabase Auth** (`signUp`, `signInWithPassword`)
- [ ] `ActivateUser`, `ResendOtp`: **Supabase Auth** email OTP (`verifyOtp`, `resend`); keep the `OTP.js` input UI
- [ ] `RestePassMail`, `newPass`: **Supabase Auth** (`resetPasswordForEmail`, `updateUser`)
- [ ] `AuthUser`, `AuthenticateUser`, `AuthenticateAdmin`, `CurrentUser`: `commerce.auth.getActor()` (Supabase session + `Profile.role`)
- [ ] `UpdateUser`: `commerce.profiles.updateSelf`
- [ ] `Users`, `UpdateUserAdmin`: `commerce.profiles.list`, `commerce.profiles.updateRole` (admin)

## Not in the storefront yet (new in Phase 4)

- [ ] Cart persistence (today only `cartContext` in the browser): `commerce.cart.*`
- [ ] Checkout → `Pending` order: `commerce.orders.create`
- [ ] Order history / lookup: `commerce.orders.listMine`, `commerce.orders.get`
