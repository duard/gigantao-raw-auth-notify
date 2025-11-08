import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfadrcstEntity } from './tGFADRCST.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFADRCSTR9000', ['codemp', 'referencia', 'regpai', 'reg'], {
  unique: true,
})
@Entity('TGFADRCSTR9000', { schema: 'SANKHYA' })
export class Tgfadrcstr9000Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'9000'",
  })
  reg: string;

  @Column('float', { name: 'REG1200_ICMSST_COMPLEMENTAR', precision: 53 })
  reg1200IcmsstComplementar: number;

  @Column('float', { name: 'REG1200_ICMSST_RECUPER_RESSARC', precision: 53 })
  reg1200IcmsstRecuperRessarc: number;

  @Column('float', { name: 'REG1300_ICMSST_RECUPER_RESSARC', precision: 53 })
  reg1300IcmsstRecuperRessarc: number;

  @Column('float', { name: 'REG1400_ICMSST_RECUPER_RESSARC', precision: 53 })
  reg1400IcmsstRecuperRessarc: number;

  @Column('float', { name: 'REG1500_ICMSST_RECUPER_RESSARC', precision: 53 })
  reg1500IcmsstRecuperRessarc: number;

  @Column('float', { name: 'REG9000_FECOP_COMPLEMENTAR', precision: 53 })
  reg9000FecopComplementar: number;

  @Column('float', { name: 'REG9000_FECOP_RESSARCIR', precision: 53 })
  reg9000FecopRessarcir: number;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 4,
    default: () => "'0000'",
  })
  regpai: string;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(
    () => TgfadrcstEntity,
    (tgfadrcstEntity) => tgfadrcstEntity.tgfadrcstr9s,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfadrcst: TgfadrcstEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfadrcstr9s)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
