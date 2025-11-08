import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK__TWFPDP__0B4615881AC8771F',
  ['nuprnmestre', 'versaoprnmestre', 'nuprnsub'],
  {
    unique: true,
  },
)
@Entity('TWFPDP', { schema: 'SANKHYA' })
export class TwfpdpEntity {
  @Column('int', { primary: true, name: 'NUPRNMESTRE' })
  nuprnmestre: number;

  @Column('int', { primary: true, name: 'VERSAOPRNMESTRE' })
  versaoprnmestre: number;

  @Column('int', { primary: true, name: 'NUPRNSUB' })
  nuprnsub: number;
}
