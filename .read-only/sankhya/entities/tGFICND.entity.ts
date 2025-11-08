import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcndEntity } from './tGFCND.entity';

@Index(
  'PK_TGFICND',
  [
    'nucnd',
    'codnatrec',
    'codcencusrec',
    'codprojrec',
    'codemprec',
    'codparcrec',
    'codnatdesp',
    'codcencusdesp',
    'codprojdesp',
    'codempdesp',
    'codparcdesp',
  ],
  { unique: true },
)
@Entity('TGFICND', { schema: 'SANKHYA' })
export class TgficndEntity {
  @Column('int', { primary: true, name: 'NUCND' })
  nucnd: number;

  @Column('int', { primary: true, name: 'CODNATREC' })
  codnatrec: number;

  @Column('int', { primary: true, name: 'CODCENCUSREC' })
  codcencusrec: number;

  @Column('int', { primary: true, name: 'CODPROJREC' })
  codprojrec: number;

  @Column('smallint', {
    primary: true,
    name: 'CODEMPREC',
    default: () => '(0)',
  })
  codemprec: number;

  @Column('int', { primary: true, name: 'CODPARCREC', default: () => '(0)' })
  codparcrec: number;

  @Column('int', { primary: true, name: 'CODNATDESP' })
  codnatdesp: number;

  @Column('int', { primary: true, name: 'CODCENCUSDESP' })
  codcencusdesp: number;

  @Column('int', { primary: true, name: 'CODPROJDESP' })
  codprojdesp: number;

  @Column('int', { primary: true, name: 'CODEMPDESP', default: () => '(0)' })
  codempdesp: number;

  @Column('int', { primary: true, name: 'CODPARCDESP', default: () => '(0)' })
  codparcdesp: number;

  @Column('float', { name: 'PERCRATEIO', precision: 53 })
  percrateio: number;

  @ManyToOne(() => TgfcndEntity, (tgfcndEntity) => tgfcndEntity.tgficnds)
  @JoinColumn([{ name: 'NUCND', referencedColumnName: 'nucnd' }])
  nucnd2: TgfcndEntity;
}
