import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfmonEntity } from './tGFMON.entity';

@Index('PK_TGFTEM', ['codtipoper', 'tipo', 'email'], { unique: true })
@Entity('TGFTEM', { schema: 'SANKHYA' })
export class TgftemEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', {
    primary: true,
    name: 'EMAIL',
    length: 80,
    default: () => "' '",
  })
  email: string;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('char', { name: 'FATURAR', length: 1, default: () => "'N'" })
  faturar: string;

  @Column('char', { name: 'LIBERAR', length: 1, default: () => "'N'" })
  liberar: string;

  @Column('smallint', { name: 'DIASAVISO', default: () => '(0)' })
  diasaviso: number;

  @Column('varchar', { name: 'TEXTO', nullable: true, length: 255 })
  texto: string | null;

  @Column('varchar', { name: 'DATACRITICA', length: 1, default: () => "'N'" })
  datacritica: string;

  @Column('varchar', { name: 'ARQMODEMAIL', nullable: true, length: 200 })
  arqmodemail: string | null;

  @ManyToOne(() => TgfmonEntity, (tgfmonEntity) => tgfmonEntity.tgftems)
  @JoinColumn([{ name: 'MODELO', referencedColumnName: 'codmodnf' }])
  modelo: TgfmonEntity;
}
