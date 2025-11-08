import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TprastEntity } from './tPRAST.entity';

@Index('PK_TPRSWXP', ['codprodpa', 'nuast'], { unique: true })
@Index('TPRSWXP_I01', ['nuast', 'codprodpa', 'controlepa'], {})
@Entity('TPRSWXP', { schema: 'SANKHYA' })
export class TprswxpEntity {
  @Column('int', { primary: true, name: 'NUAST' })
  nuast: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('int', { name: 'VALINTEIRO' })
  valinteiro: number;

  @Column('float', { name: 'VALDECIMAL', precision: 53 })
  valdecimal: number;

  @Column('varchar', { name: 'VALTEXTO', length: 100 })
  valtexto: string;

  @Column('varchar', { name: 'VALMEMO', length: 3103 })
  valmemo: string;

  @ManyToOne(() => TprastEntity, (tprastEntity) => tprastEntity.tprswxps)
  @JoinColumn([{ name: 'NUAST', referencedColumnName: 'nuast' }])
  nuast2: TprastEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprswxps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;
}
