import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_SEGURANCA', ['nunico', 'sequencia'], { unique: true })
@Entity('AD_SEGURANCA', { schema: 'SANKHYA' })
export class AdSegurancaEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 10 })
  situacao: string | null;

  @Column('datetime', { name: 'DTAGENDA', nullable: true })
  dtagenda: Date | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('datetime', { name: 'DHFINALIZA', nullable: true })
  dhfinaliza: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adSegurancas)
  @JoinColumn([{ name: 'CODUSURESP', referencedColumnName: 'codusu' }])
  codusuresp: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adSegurancas2)
  @JoinColumn([{ name: 'CODUSUFIN', referencedColumnName: 'codusu' }])
  codusufin: TsiusuEntity;
}
