import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsihcfEntity } from './tSIHCF.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIUSUBK', ['nunico', 'codusu'], { unique: true })
@Entity('TSIUSUBK', { schema: 'SANKHYA' })
export class TsiusubkEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'BAIXAREC', nullable: true, length: 1 })
  baixarec: string | null;

  @Column('varchar', { name: 'BAIXADESP', nullable: true, length: 1 })
  baixadesp: string | null;

  @Column('varchar', { name: 'VERCABPROPRIA', nullable: true, length: 1 })
  vercabpropria: string | null;

  @Column('varchar', { name: 'SENHANUNCAEXPIRA', nullable: true, length: 1 })
  senhanuncaexpira: string | null;

  @Column('varchar', { name: 'ALTCTAFAT', nullable: true, length: 1 })
  altctafat: string | null;

  @Column('varchar', { name: 'ALTCTAIMPBOL', nullable: true, length: 1 })
  altctaimpbol: string | null;

  @Column('varchar', { name: 'ALTORDCFECH', nullable: true, length: 1 })
  altordcfech: string | null;

  @Column('varchar', { name: 'EXIBIRVALANALRENT', nullable: true, length: 1 })
  exibirvalanalrent: string | null;

  @Column('varchar', { name: 'IMPNFCENTRAL', nullable: true, length: 1 })
  impnfcentral: string | null;

  @Column('smallint', { name: 'MINUTOSFIN', nullable: true })
  minutosfin: number | null;

  @Column('varchar', { name: 'APROVCOT', nullable: true, length: 1 })
  aprovcot: string | null;

  @Column('varchar', { name: 'ACESSOVISUALCAB', nullable: true, length: 1 })
  acessovisualcab: string | null;

  @Column('varchar', { name: 'RESTRINGECART', nullable: true, length: 1 })
  restringecart: string | null;

  @Column('varchar', { name: 'CONTACESSO', nullable: true, length: 30 })
  contacesso: string | null;

  @Column('varchar', { name: 'CONTAGOL', nullable: true, length: 30 })
  contagol: string | null;

  @ManyToOne(() => TsihcfEntity, (tsihcfEntity) => tsihcfEntity.tsiusubks)
  @JoinColumn([{ name: 'NUNICO', referencedColumnName: 'nunico' }])
  nunico2: TsihcfEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiusubks)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
