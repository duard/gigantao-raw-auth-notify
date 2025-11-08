import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK__TWFUST__4D68182F3A2B4888',
  ['codprn', 'codsubstituto', 'codanterior'],
  { unique: true },
)
@Entity('TWFUST', { schema: 'SANKHYA' })
export class TwfustEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('int', { primary: true, name: 'CODSUBSTITUTO' })
  codsubstituto: number;

  @Column('int', { primary: true, name: 'CODANTERIOR' })
  codanterior: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;
}
