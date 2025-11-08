import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfcodrecdirfEntity } from './tGFCODRECDIRF.entity';

@Index(
  'PK_TGFDIRFIDREC',
  ['codemp', 'dtinicial', 'dtfinal', 'reg', 'regpai', 'codrec'],
  {
    unique: true,
  },
)
@Entity('TGFDIRFIDREC', { schema: 'SANKHYA' })
export class TgfdirfidrecEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 5,
    default: () => "'IDREC'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 5,
    default: () => "'DECPJ'",
  })
  regpai: string;

  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfidrecs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(
    () => TgfcodrecdirfEntity,
    (tgfcodrecdirfEntity) => tgfcodrecdirfEntity.tgfdirfidrecs,
  )
  @JoinColumn([{ name: 'CODREC', referencedColumnName: 'codrec' }])
  codrec2: TgfcodrecdirfEntity;
}
