import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { AdCadhabEntity } from './aD_CADHAB.entity';

@Index('PK_AD_TSIUSUHAB', ['codusu', 'nuhab'], { unique: true })
@Entity('AD_TSIUSUHAB', { schema: 'SANKHYA' })
export class AdTsiusuhabEntity {
  @Column('int', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'NUHAB' })
  nuhab: number;

  @Column('int', { name: 'NUMHAB', nullable: true })
  numhab: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('image', { name: 'HABILITACAO', nullable: true })
  habilitacao: Buffer | null;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;

  @Column('datetime', { name: 'DHINC', nullable: true })
  dhinc: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'COMPLEMENTAR', nullable: true, length: 10 })
  complementar: string | null;

  @Column('varchar', { name: 'IMPRIMIRCRACHA', nullable: true, length: 10 })
  imprimircracha: string | null;

  @Column('varchar', { name: 'APLICACAO', nullable: true, length: 10 })
  aplicacao: string | null;

  @Column('int', { name: 'CODUSURESP', nullable: true })
  codusuresp: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adTsiusuhabs)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adTsiusuhabs2)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.adTsiusuhabs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(
    () => AdCadhabEntity,
    (adCadhabEntity) => adCadhabEntity.adTsiusuhabs,
  )
  @JoinColumn([{ name: 'CODHAB', referencedColumnName: 'codhab' }])
  codhab: AdCadhabEntity;
}
