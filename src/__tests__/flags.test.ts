import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { defineFlags } from '../../dist/index.js';

describe('defineFlags', () => {
  const permissions = defineFlags({ read: 1, write: 2, execute: 4 });

  it('has returns true when flag is set', () => {
    assert.equal(permissions.has(7, 'read'), true);
  });

  it('has returns false when flag is not set', () => {
    assert.equal(permissions.has(2, 'read'), false);
  });

  it('set applies multiple flags', () => {
    assert.equal(permissions.set(0, 'read', 'write'), 3);
  });

  it('unset removes a flag', () => {
    assert.equal(permissions.unset(7, 'execute'), 3);
  });

  it('toggle removes a set flag', () => {
    assert.equal(permissions.toggle(1, 'read'), 0);
  });

  it('toggle adds an unset flag', () => {
    assert.equal(permissions.toggle(0, 'read'), 1);
  });

  it('toArray returns active flag names', () => {
    assert.deepEqual(permissions.toArray(5), ['read', 'execute']);
  });

  it('fromArray combines flags', () => {
    assert.equal(permissions.fromArray(['read', 'write']), 3);
  });

  it('all returns combined value of all flags', () => {
    assert.equal(permissions.all, 7);
  });

  it('none returns 0', () => {
    assert.equal(permissions.none, 0);
  });
});
