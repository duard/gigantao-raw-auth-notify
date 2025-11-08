import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TgfcfoEntity } from './tGFCFO.entity';

@Index('PK_TGFLREA', ['nunota', 'origem', 'sequencia'], { unique: true })
@Entity('TGFLREA', { schema: 'SANKHYA' })
export class TgflreaEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', {
    primary: true,
    name: 'ORIGEM',
    length: 1,
    default: () => "'E'",
  })
  origem: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUMITEMREA' })
  numitemrea: number;

  @Column('float', { name: 'BASE', precision: 53, default: () => '(0)' })
  base: number;

  @Column('float', { name: 'ALIQUOTA', precision: 53, default: () => '(0)' })
  aliquota: number;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('int', { name: 'ATUALREA', default: () => '(1)' })
  atualrea: number;

  @ManyToOne(() => TgfcfoEntity, (tgfcfoEntity) => tgfcfoEntity.tgflreas)
  @JoinColumn([{ name: 'CODCFO', referencedColumnName: 'codcfo' }])
  codcfo: TgfcfoEntity;

  @OneToOne(() => TgflreaEntity, (tgflreaEntity) => tgflreaEntity.tgflrea)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'ORIGEM', referencedColumnName: 'origem' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgflrea: TgflreaEntity;
}
