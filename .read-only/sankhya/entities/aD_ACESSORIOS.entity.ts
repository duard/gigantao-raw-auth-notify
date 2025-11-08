import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_AD_ACESSORIOS', ['codbem', 'codprod', 'nureg'], { unique: true })
@Entity('AD_ACESSORIOS', { schema: 'SANKHYA' })
export class AdAcessoriosEntity {
  @Column('varchar', { primary: true, name: 'CODBEM', length: 100 })
  codbem: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUREG' })
  nureg: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.adAcessorios)
  @JoinColumn([{ name: 'UND', referencedColumnName: 'codvol' }])
  und: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adAcessorios)
  @JoinColumn([{ name: 'CODITEM', referencedColumnName: 'codprod' }])
  coditem: TgfproEntity;
}
