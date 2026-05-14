//! core-engine
//!
//! Minimal root lib for the core engine. This crate will expose shared startup and orchestration primitives.

use anyhow::Result;

pub fn start() -> Result<()> {
    tracing::info!("core-engine start stub");
    Ok(())
}
