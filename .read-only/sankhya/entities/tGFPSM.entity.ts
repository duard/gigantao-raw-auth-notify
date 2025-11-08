import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFPSM', ['nupesagem'], { unique: true })
@Entity('TGFPSM', { schema: 'SANKHYA' })
export class TgfpsmEntity {
  @Column('int', { primary: true, name: 'NUPESAGEM' })
  nupesagem: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('char', { name: 'PLACA', length: 7 })
  placa: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', { name: 'MOTORISTA', nullable: true, length: 100 })
  motorista: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { name: 'PLACAUF', nullable: true, length: 2 })
  placauf: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpsms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
