import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvenEntity } from './tGFVEN.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFASA', ['nuadiant', 'sequencia'], { unique: true })
@Entity('TGFASA', { schema: 'SANKHYA' })
export class TgfasaEntity {
  @Column('int', { primary: true, name: 'NUADIANT', default: () => '(0)' })
  nuadiant: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'SINAL', nullable: true })
  sinal: number | null;

  @Column('datetime', { name: 'DTADIAN', nullable: true })
  dtadian: Date | null;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('char', { name: 'PENDENTE', length: 1, default: () => "'S'" })
  pendente: string;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfasas)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfasas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfasas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
