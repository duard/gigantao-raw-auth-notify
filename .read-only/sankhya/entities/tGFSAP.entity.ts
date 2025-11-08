import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSAP', ['nusap'], { unique: true })
@Entity('TGFSAP', { schema: 'SANKHYA' })
export class TgfsapEntity {
  @Column('int', { primary: true, name: 'NUSAP' })
  nusap: number;

  @Column('float', { name: 'VLRPRECO', precision: 53 })
  vlrpreco: number;

  @Column('smallint', { name: 'CODTAB' })
  codtab: number;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('datetime', { name: 'DHSAP' })
  dhsap: Date;

  @Column('text', { name: 'OBSERVACAOLIB', nullable: true })
  observacaolib: string | null;

  @Column('char', { name: 'APROVADO', length: 1, default: () => "'N'" })
  aprovado: string;

  @Column('datetime', { name: 'DHLIB', nullable: true })
  dhlib: Date | null;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfsaps)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfsaps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfsaps)
  @JoinColumn([{ name: 'CODLIBERADOR', referencedColumnName: 'codusu' }])
  codliberador: TsiusuEntity;
}
