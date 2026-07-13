# NEXORA AI — Premium Shopify Online Store 2.0 Theme

NEXORA AI is an immersive, high-performance, ultra-minimal dark-aesthetic Shopify Online Store 2.0 theme. It is custom-engineered specifically for premium consumer technology, luxury wearables, robotics, AI computing modules, development kits, and high-end consumer hardware brands.

---

## 🛠️ Installation Guide

Follow these steps to deploy the theme directly to your Shopify store:

### Option A: Manual Archive Upload
1. Package the entire file tree structure into a standardized `.zip` archive. Ensure that directories (`assets/`, `config/`, `layout/`, `sections/`, `snippets/`, `templates/`, `locales/`) rest natively at the root layer of the file package.
2. Navigate to your **Shopify Admin Dashboard**.
3. Go to **Online Store** → **Themes**.
4. Inside the **Theme Library** dashboard layout pane, select **Add Theme** → **Upload zip file**.
5. Upload your custom archive, wait for the processing layout loop to complete, and select **Publish**.

### Option B: Local Theme Pipeline via Shopify CLI
If you prefer developing directly using local environment variables, stream the data architecture into your workspace sandbox:
```bash
# Log in to your target development storefront node
shopify login --store=nexora-ai-dev.myshopify.com

# Preview theme modules locally in real-time
shopify theme dev

# Push live adjustments directly to your production store
shopify theme push
