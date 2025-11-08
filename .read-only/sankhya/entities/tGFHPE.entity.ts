import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHPE', ['nuevento'], { unique: true })
@Entity('TGFHPE', { schema: 'SANKHYA' })
export class TgfhpeEntity {
  @Column('int', { primary: true, name: 'NUEVENTO' })
  nuevento: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'EVENTO', length: 1 })
  evento: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('float', { name: 'QTDNEG', precision: 53, default: () => '(0)' })
  qtdneg: number;

  @Column('float', { name: 'QTDENTREGUE', precision: 53, default: () => '(0)' })
  qtdentregue: number;

  @Column('float', { name: 'VLRUNIT', precision: 53, default: () => '(0)' })
  vlrunit: number;

  @Column('float', { name: 'PERCDESC', precision: 53, default: () => '(0)' })
  percdesc: number;

  @Column('int', { name: 'NUEVENTOORIG', nullable: true })
  nueventoorig: number | null;
}
